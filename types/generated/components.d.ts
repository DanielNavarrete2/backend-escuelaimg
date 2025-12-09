import type { Schema, Struct } from '@strapi/strapi';

export interface BloquesAreaDetalle extends Struct.ComponentSchema {
  collectionName: 'components_bloques_area_detalles';
  info: {
    displayName: 'areaDetalle';
    icon: 'alien';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images'>;
    nombre: Schema.Attribute.String;
  };
}

export interface EquipoEquipo extends Struct.ComponentSchema {
  collectionName: 'components_equipo_equipos';
  info: {
    displayName: 'equipo';
    icon: 'alien';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    cargo: Schema.Attribute.String;
    foto: Schema.Attribute.Media<'images'>;
    nombre: Schema.Attribute.String;
  };
}

export interface EquipoNosotros extends Struct.ComponentSchema {
  collectionName: 'components_equipo_nosotros';
  info: {
    displayName: 'nosotros';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    cargo: Schema.Attribute.String;
    foto: Schema.Attribute.Media<'images'>;
    nombre: Schema.Attribute.String;
  };
}

export interface FormularioForm extends Struct.ComponentSchema {
  collectionName: 'components_formulario_forms';
  info: {
    displayName: 'form';
    icon: 'alien';
  };
  attributes: {
    apoderado: Schema.Attribute.String;
    email: Schema.Attribute.String;
    estudiante: Schema.Attribute.String;
    mensaje: Schema.Attribute.String;
    nivel: Schema.Attribute.String;
    niveles_educativos: Schema.Attribute.JSON;
    submit: Schema.Attribute.String;
    success: Schema.Attribute.String;
  };
}

export interface FormularioForm2 extends Struct.ComponentSchema {
  collectionName: 'components_formulario_form2s';
  info: {
    displayName: 'form2';
    icon: 'alien';
  };
  attributes: {
    email: Schema.Attribute.String;
    mensaje: Schema.Attribute.String;
    nombre: Schema.Attribute.String;
    submit: Schema.Attribute.String;
    success: Schema.Attribute.String;
  };
}

export interface NavegadorMenu extends Struct.ComponentSchema {
  collectionName: 'components_navegador_menus';
  info: {
    displayName: 'menu';
    icon: 'alien';
  };
  attributes: {
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface TarjetaItemsBasica extends Struct.ComponentSchema {
  collectionName: 'components_tarjeta_items_basicas';
  info: {
    displayName: 'items_basica';
  };
  attributes: {
    icono: Schema.Attribute.String;
    texto: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

export interface TarjetaItemsParvularia extends Struct.ComponentSchema {
  collectionName: 'components_tarjeta_items_parvularias';
  info: {
    displayName: 'items_parvularia';
  };
  attributes: {
    icono: Schema.Attribute.String;
    imagen: Schema.Attribute.Media<'images'>;
    texto: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

export interface TarjetaTarjetaInfo extends Struct.ComponentSchema {
  collectionName: 'components_tarjeta_tarjeta_infos';
  info: {
    displayName: 'tarjeta_info';
    icon: 'alien';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'bloques.area-detalle': BloquesAreaDetalle;
      'equipo.equipo': EquipoEquipo;
      'equipo.nosotros': EquipoNosotros;
      'formulario.form': FormularioForm;
      'formulario.form2': FormularioForm2;
      'navegador.menu': NavegadorMenu;
      'tarjeta.items-basica': TarjetaItemsBasica;
      'tarjeta.items-parvularia': TarjetaItemsParvularia;
      'tarjeta.tarjeta-info': TarjetaTarjetaInfo;
    }
  }
}
