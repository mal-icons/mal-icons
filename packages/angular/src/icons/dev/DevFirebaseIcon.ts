import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-firebase-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevFirebaseIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M210.8 582.8A239 239 0 0 0 400 578a338 338 0 0 1-105.7-66.4 181 181 0 0 1-83.6 71.2"}],["path",{"fill":"currentColor","d":"M294.4 511.7a337 337 0 0 1-107.8-269.8 180 180 0 0 0-94.1 1 239 239 0 0 0 118.3 339.9 181 181 0 0 0 83.6-71.1"}],["path",{"fill":"currentColor","d":"M294.4 511.7A180.3 180.3 0 0 0 186.6 242l-0.5 9.9a337 337 0 0 0 108.3 259.8"}],["path",{"fill":"currentColor","d":"M312.6 0a338 338 0 0 0-126 242 180.3 180.3 0 0 1 107.8 269.7A337 337 0 0 0 400 578a239 239 0 0 0 138.6-208.5c2.1-60.4-21-114.2-53.8-159.6C450.2 161.9 312.6 0 312.6 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevFirebaseIcon;
