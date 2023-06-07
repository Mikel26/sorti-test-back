/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('tareas/getTareas', 'TareasController.getAll');
Route.get('tareas/getHistorial', 'TareasController.getHistorial');
Route.post('tareas/postTarea', 'TareasController.postTarea');
Route.delete('tareas/deleteTarea/:id', 'TareasController.deleteTarea');
Route.put('tareas/updateTarea/:id', 'TareasController.updateTarea');
Route.put('tareas/completeTarea/:id', 'TareasController.completeTarea');
Route.get('tareas/sendHistorial/:id', 'TareasController.sendHistorial');
Route.get('tareas/recoverTarea/:id', 'TareasController.recoverTarea');
