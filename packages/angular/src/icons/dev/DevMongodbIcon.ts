import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-mongodb-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevMongodbIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M352.1 66.9A1065 1065 0 0 1 300.80.4q-0.7-0.7-1.6 0C294.8 6.7 273 37 247.9 66.9c-216.2 275.6 34 461.7 34 461.7l2.1 1.4c1.9 28.7 6.6 70 6.6 70h18.6s4.7-41 6.5-70l2.1-1.7c0.30.3 250.5-185.8 34.3-461.4M300 524.4s-11.2-9.6-14.2-14.5v-0.5l13.5-300.1c0-1 1.4-1 1.4 0L314 509.4v0.5c-3 4.9-14.2 14.5-14.2 14.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevMongodbIcon;
