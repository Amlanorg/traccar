/*
 * Copyright 2015 Anton Tananaev (anton.tananaev@gmail.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Ext.define('LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'login-form',

    defaultType: 'textfield',
    bodyPadding: styles.panel_padding,

    defaults: { anchor: '100%' },

    items: [{
        allowBlank: false,
        fieldLabel: strings.login_user,
        name: 'user'
    }, {
        allowBlank: false,
        fieldLabel: strings.login_password,
        name: 'password',
        inputType: 'password'
    }],

    buttons: [
        { text: strings.login_register },
        { text: strings.login_login }
    ]
});

Ext.define('Login', {
    extend: 'Ext.window.Window',

    title: strings.login_title,

    items: [{ xtype: 'login-form' }]
});
