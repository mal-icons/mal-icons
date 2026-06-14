import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-jhipster-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevJhipsterIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M350.5 280.1S52.8 107.4 27.1 214.8C1.4 322.3-27.6 404 51.7 419s298.8-138.9 298.8-138.9"}],["path",{"fill":"currentColor","d":"M299 254.1c85.3-44.1 254.2-119.7 273.5-39.6 26 107.8 55.2 189.8-24 205.2C493 430.4 368 357.6 298.6 313.3c0-52.30.5-7.60.4-59.2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevJhipsterIcon;
