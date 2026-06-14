import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-openshift",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevOpenshift {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m174.2 271.9-96.3 35q2 23.3 7.6 45.7l91.5-33.3q-4.6-23.3-2.8-47.4M600 165.4a276 276 0 0 0-23.5-40l-96.3 35.1a180 180 0 0 1 28.3 38.2z"}],["path",{"fill":"currentColor","d":"M429 164.8A179.2 179.2 0 0 0 143.9 240a184 184 0 0 0-9.3 46l-0.30.2v0.3l-58 21.1L39 321.4v-0.2l-1 0.4a274 274 0 0 1 33.5-154.8A272 272 0 0 1 427.2 48a272 272 0 0 1 72 49.7q21 19.4 37.2 42.3l-96.3 35-1.5-1.4h-0.3c-3-3-6-6-9.2-8.9"}],["path",{"fill":"currentColor","d":"M43.2 477H43c-20-28-34.6-59.8-43-93.1l91.5-33.4v0.3l0.7-0.2a184 184 0 0 0 28.8 69.6q8.1 11.7 18.2 22l-0.40.10.70.7L44 478.2z"}],["path",{"fill":"currentColor","d":"M406.7 452.4a179 179 0 0 1-222.1-26.9l-96.1 35 0.7 1a270.5 270.5 0 0 0 388.8 59 274 274 0 0 0 108.9-241.4l-2.7 1-0.1-1.5-95.5 35.3a180 180 0 0 1-81.9 138.5"}],["path",{"fill":"currentColor","d":"m513 197 1.5-0.5a280 280 0 0 1 27 99.1l-96.2 35v-0.7l-1.70.7c2.6-35.6-5.4-71-22.3-101.7l91-33.6z"}],["path",{"fill":"currentColor","d":"m174.3 271.3-95.6 35.4q1.8 23.5 7.6 46l90.8-33.6q-4.6-23.5-2.7-47.8M597.1 164q-10-21.1-23.3-40.3L478 159a181 181 0 0 1 28.2 38.5z"}],["path",{"fill":"currentColor","d":"m78.7 306.7 95.4-35-0.4 19.2-92 34.8zm399.5-147.9 96.9-33.3 10 15.2L491 174z"}],["path",{"fill":"currentColor","d":"m89.2 461.2 95.5-34.7 29 27.2-100.3 37.6zm496.5-182.3-97 35-7.2 38.8L585 316z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevOpenshift;
