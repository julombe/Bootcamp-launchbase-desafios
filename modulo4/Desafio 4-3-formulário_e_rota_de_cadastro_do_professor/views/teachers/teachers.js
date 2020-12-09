{% extends "layout.njk" %}



{% block content %}

<div class="card">
    <section class="avatar"
    style="background: url(https://source.unsplash.com/collection/1603248/500x500) no-repeat center center /cover"></section>

    <section class="details">
        <h3>Detalhes</h3>

        <div class="item">
            <div>Teacher</div>
            <div>José Ulombe</div>
        </div>

        <div class="item">
            <div>Idade</div>
            <div>31</div>
        </div>

        <div class="item">
            <div>Grau de Escolaridade</div>
            <div>Licenciado</div>
        </div>

        <div class="item">
            <div>Acompanhamento</div>
            <div>
                <span>Matemática</span>
                <span>Física</span>
            </div>
        </div>

        <div class="item">
            <div>Desde</div>
            <div>01/01/2020</div>
        </div>

    </section>
</div>
    
{% endblock content %}