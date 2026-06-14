import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-ruby",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevRuby {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-ruby-17-a)"}],["path",{"fill":"currentColor","d":"M464.8 395.8 122.3 599.2 565.8 569 600 121.8z"}],["path",{"fill":"currentColor","d":"m566.6 568.8-38.2-263.2-103.8 137.2z"}],["path",{"fill":"currentColor","d":"m567 568.8-279.2-22-164 51.8z"}],["path",{"fill":"currentColor","d":"M124.2 598.7 193.9 370 40.4 402.9z"}],["path",{"fill":"currentColor","d":"M424.6 443.5 360.4 192 176.6 364.3z"}],["path",{"fill":"currentColor","d":"M585.4 195.6 411.8 53.7l-48.4 156.4z"}],["path",{"fill":"currentColor","d":"M504.2 3.2 402.1 59.6 337.6 2.4z"}],["path",{"fill":"currentColor","d":"m0 479.6 42.8-78-34.6-93z"}],["path",{"fill":"currentColor","d":"m5.9 305.6 34.8 98.8 151.3-34L364.8 210l48.7-155L336.80.8 206.3 49.7C165 87.9 85.3 163.6 82.5 165c-2.9 1.5-52.7 95.7-76.6 140.6"}],["path",{"fill":"currentColor","d":"M128.2 128.2c89-88.4 204-140.6 248-96.1 44.1 44.5-2.6 152.6-91.7 241C195.4 361.3 81.9 416.3 37.8 372s1.2-155.5 90.4-243.8"}],["path",{"fill":"currentColor","d":"m124.2 598.6 69.2-229.3L423.3 443c-83.1 78-175.6 143.9-299.1 155.5"}],["path",{"fill":"currentColor","d":"m365 209.5 59.1 233.7c69.5-73 131.8-151.5 162.3-248.6z"}],["path",{"fill":"currentColor","d":"M585.8 195.8c23.6-71.3 29-173.5-82.3-192.5L412 53.8z"}],["path",{"fill":"currentColor","d":"M0 478.6C3.3 596.2 88.2 598 124.3 599L40.8 404z"}],["path",{"fill":"currentColor","d":"m365.4 209.8 163.1 99.9c3.4 1.9 46.4-72.5 56.1-114.5z"}],["path",{"fill":"currentColor","d":"m193.3 369.3 92.5 178.5c54.8-29.7 97.6-65.8 136.9-104.6z"}],["path",{"fill":"currentColor","d":"m40.4 404.2-13 156.1c24.7 33.8 58.7 36.8 94.4 34.1C96 530.1 44.4 401.6 40.4 404.2"}],["path",{"fill":"currentColor","d":"M411.5 54.2 595.4 80c-9.8-41.6-40-68.4-91.3-76.8z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevRuby;
