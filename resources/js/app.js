/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 import React from 'react'
 import { render } from 'react-dom'
 import { createInertiaApp } from '@inertiajs/inertia-react'
 
 createInertiaApp({
   resolve: name => require(`./Pages/${name}`),
   setup({ el, App, props }) {
     render(<App {...props} />, el)
   },
 })