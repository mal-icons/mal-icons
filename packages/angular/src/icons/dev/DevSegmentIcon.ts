import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-segment-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevSegmentIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M539 321.4h0.4l40.5 4.2q4.50.6 7.3 4l0.30.3-0.40.2q3 3.8 2.4 8.4a302 302 0 0 1-94.2 183.6 292 292 0 0 1-303 58.5l-1.8-0.7c-2.7-1-5-3.1-6-5.7l-0.3-0.5a11 11 0 0 1-0.2-8.3l16-39a11 11 0 0 1 13.9-6.3l0.40.1a229 229 0 0 0 238.5-45.8A237 237 0 0 0 527.3 331c0.8-5.6 5.7-9.8 11.3-9.6zM108.6 467h1.2c18.30.2 33.1 15 33.3 33.4v1.2a34 34 0 1 1-34.5-34.6M21.3 333h331.3c6.10.1 11 5 11.2 11v42c0 6-4.7 11-10.8 11.3H21.3c-6 0-11-4.9-11.1-11V344c0.1-5.9 4.8-10.7 10.7-11zM394.1 16.7q4.4 1.6 6.5 6c1.1 2.7 1.1 5.9 0 8.7L386 69.8a11 11 0 0 1-14 6.7 229 229 0 0 0-221.3 39.6 238 238 0 0 0-78.1 124.5 11 11 0 0 1-10.8 8.4h-2.5l-39.6-9.6a11 11 0 0 1-7-5.2h-0.2a11 11 0 0 1-1.3-8.7A302 302 0 0 1 112 66.5a291 291 0 0 1 282.2-50M247.4 182.8h331.3c6 0 10.8 4.7 11.1 10.6v41.9c0.1 6-4.7 11-10.7 11.3H247.4c-6 0-11-5-11.1-11v-41.4c0-6 4.7-11 10.7-11.3zm230-126.5h1.1c18.40.2 33.2 15 33.4 33.4v1.1a34 34 0 1 1-34.5-34.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevSegmentIcon;
