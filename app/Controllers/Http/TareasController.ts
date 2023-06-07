// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import moment from 'moment';

export default class TareasController {
    public async getAll({ response }) {
        try {
            const tareas = await Database.from('tareas').select('*').where('historial', false);

            return response.status(200).send({
                tareas,
                status: true
            });
        } catch (error) {
            return error
        }
    }

    public async getHistorial({ response }) {
        try {
            const tareas = await Database.from('tareas').select('*').where('historial', true);

            return response.status(200).send({
                tareas,
                status: true
            });
        } catch (error) {
            return error
        }
    }

    public async postTarea({ response, request }) {
        try {
            // Database.insertQuery();
            const query = Database.table('tareas').insert({
                titulo: request.input('titulo'),
                descripcion: request.input('descripcion'),
                create_time: moment().format('YYYY-MM-DD HH:mm:00'),
                estado: false,
                historial: false
            }).toQuery();

            await Database.rawQuery(query);

            return response.status(200).send({
                status: true
            });
        } catch (error) {
            return error
        }
    }

    public async deleteTarea({ response, params }) {
        try {
            const id = params.id;

            const dlte = await Database.from('tareas').where('id', id).delete();

            return response.status(200).send({
                status: dlte
            });
        } catch (error) {
            return error
        }
    }

    public async historialTarea({ response, params }) {
        try {
            const id = params.id;

            const query = Database.from('tareas').where('id', id).update({
                historial: true
            }).toQuery();

            await Database.rawQuery(query);

            return response.status(200).send({
                status: 1
            });
        } catch (error) {
            return error
        }
    }

    public async updateTarea({ response, params, request }) {
        try {
            const id = params.id;

            const query = Database.from('tareas').where('id', id).update({
                titulo: request.input('titulo'),
                descripcion: request.input('descripcion')
            }).toQuery();

            const update = await Database.rawQuery(query);

            console.log('update :>> ', update);

            return response.status(200).send({
                status: 1
            });
        } catch (error) {
            return error
        }
    }

    public async completeTarea({ response, params, request }) {
        try {
            const id = params.id;
            const estado = request.input('estado');

            console.log('estado :>> ', estado);

            const query = Database.from('tareas').where('id', id).update({
                estado: estado
            }).toQuery();

            await Database.rawQuery(query);

            // console.log('update :>> ', update);

            return response.status(200).send({
                status: 1
            });
        } catch (error) {
            return error
        }
    }

    public async sendHistorial({ response, params }) {
        try {
            const id = params.id;

            const query = Database.from('tareas').where('id', id).update({
                historial: true
            }).toQuery();

            await Database.rawQuery(query);

            return response.status(200).send({
                status: 1
            });
        } catch (error) {
            return error
        }
    }

    public async recoverTarea({ response, params }) {
        try {
            const id = params.id;

            const query = Database.from('tareas').where('id', id).update({
                historial: false
            }).toQuery();

            await Database.rawQuery(query);

            return response.status(200).send({
                status: 1
            });
        } catch (error) {
            return error
        }
    }
}
