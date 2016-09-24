return (
        <Plot
          plot={this.state.plot[key].plot}
          comments={this.state.plot[key].comments}
        />

        //instead of
        div key={key}>
          <h2>{this.state.plot[key].plot}</h2>
          <h3>{this.state.plot[key].comments}</h3>
        </div>
        )
    });
