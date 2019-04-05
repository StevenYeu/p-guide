<template>
  <nav className="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item nav-title" href="https://versions.bulma.io/0.7.0">
          Podcast Player
        </a>
        <a
          role="button"
          className={toggle ? 'navbar-burger burgers is-active' : 'navbar-burger burgers'}
          aria-label="menu"
          aria-expanded="false"
          data-target="menuButtons"
          onClick={() => setToggle(!toggle)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div className={toggle ? 'navbar-menu is-active' : 'navbar-menu'} id="menuButtons">
        <div className="navbar-end">
          <div className="navbar-item">
            <button type="button" className="button is-info" onClick={onClick}>
              {' '}
              <FontAwesomeIcon icon={faPlus} transform="left-4" />
              Add Podcast
            </button>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  data: function() {
    return {
      toggle: false
    }
  }
}
</script>

