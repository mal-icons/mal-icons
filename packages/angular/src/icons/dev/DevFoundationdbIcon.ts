import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-foundationdb-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevFoundationdbIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M0 444.8V429h125.8v-64.4l125 12.5V429h126.8v-64.4L600 387.8v57z"}],["path",{"fill":"currentColor","d":"m0 343 125.8-18.4v-64.4l125 31V343l126.8-18.5v-64.4l222.4 56v57.3l-222.4-31-126.8 16.7-125-16.7L0 359.2z"}],["path",{"fill":"currentColor","d":"m250.8 258 126.8-38.4v-64.4L600 246.4V302l-222.4-62.6-126.8 34.9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevFoundationdbIcon;
