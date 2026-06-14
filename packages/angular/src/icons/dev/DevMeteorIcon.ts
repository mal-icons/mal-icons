import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-meteor-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevMeteorIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m0 5.8 513.8 544.3s17.5 12.4 31-2c13.3-14.4 3-28.8 3-28.8zm162.7 51.5L554 479s17.5 12.4 30.9-2 3-28.8 3-28.8zM48.4 167.4l391.3 421.8s17.5 12.4 30.9-2 3-28.8 3-28.8zm251.8-65.9 273.4 294.8s12.2 8.6 21.6-1.5 2.2-20.1 2.2-20.1zM86 295l273.4 294.7s12.3 8.6 21.6-1.5 2.2-20 2.2-20zm354.7-129.7 124 134s6 4 10.6-0.7 1-9.4 1-9.4zM154.5 430.8l123.9 134s6 4 10.6-0.7c4.7-4.7 1.1-9.4 1.1-9.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevMeteorIcon;
