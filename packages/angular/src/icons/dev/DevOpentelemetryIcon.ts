import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-opentelemetry-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevOpentelemetryIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-opentelemetry-icon-1-a)"}],["path",{"fill":"currentColor","d":"M317.4 328a65.4 65.4 0 1 0 92.6 92.5 65.4 65.4 0 0 0-92.6-92.6m69.2 69.2a32.4 32.4 0 1 1-45.8-45.8 32.4 32.4 0 0 1 45.8 45.8M409 5.9l-40.1 40a20.3 20.3 0 0 0 0 28.7l156.6 156.6a20.3 20.3 0 0 0 28.6 0l40.1-40.1a20.3 20.3 0 0 0 0-28.6L437.5 5.9a20 20 0 0 0-28.6 0M128 518.3a18.3 18.3 0 0 0 0-25.8L107.5 472a18.3 18.3 0 0 0-25.8 0l-42.2 42.1-11.6-11.5a16.3 16.3 0 1 0-23.1 23.1l69.4 69.4A16.3 16.3 0 1 0 97.3 572l-11.6-11.6h0.1z"}],["path",{"fill":"currentColor","d":"m340 121-89 89.1c-8 8-8 21 0 28.9l55 55a99.5 99.5 0 0 1 128.4 10.4L479 260c7.9-8 7.9-21 0-28.9L369 121c-8-8-21-8-29 0m-57 196.2-32.5-32.5a19.7 19.7 0 0 0-27.7 0L108 399.3c-7.6 7.6-7.6 20 0 27.7l65 65c7.5 7.5 20 7.5 27.6 0l73.7-73.9a100 100 0 0 1 8.5-101"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevOpentelemetryIcon;
