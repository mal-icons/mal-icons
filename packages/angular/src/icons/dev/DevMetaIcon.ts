import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-meta-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevMetaIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"transform":"scale(25)"}],["path",{"fill":"currentColor","d":"M6.9 4v2.6c1.7 0 3 1.4 5.9 6.3l0.20.3 1.6-2.5L13.5 9l-1.2-1.6Q9.6 3.8 7 4"}],["path",{"fill":"currentColor","d":"M6.9 4q-3 0.2-4.9 3.2l2.3 1.2q1.1-1.7 2.5-1.8z"}],["path",{"fill":"currentColor","d":"M2 7.2a13 13 0 0 0-1.7 4.5l2.50.6q0.5-2.3 1.5-3.9z"}],["path",{"fill":"currentColor","d":"m2.8 12.3-2.5-0.6Q0 13 0 14.5l2.60.2z"}],["path",{"fill":"currentColor","d":"m2.7 15.5-0.1-0.8-2.6-0.20.1 1.6z"}],["path",{"fill":"currentColor","d":"M3.3 16.9q-0.4-0.5-0.6-1.3L0 16q0.3 1.5 1.2 2.5z"}],["path",{"fill":"currentColor","d":"m10.8 9.7-2.5 3.8c-2 3.2-2.7 3.9-3.8 3.9a2 2 0 0 1-1.2-0.5l-2 1.7a4 4 0 0 0 3 1.4c2 0 3.4-1 6-5.3l1.7-3.2z"}],["path",{"fill":"currentColor","d":"m13.5 6-1.2 1.4L13.5 9l1.4-1.8z"}],["path",{"fill":"currentColor","d":"M21 5.7Q19.2 4.1 17.1 4q-2 0.1-3.7 2l1.4 1.2Q15.9 6 17 6t2.2 1z"}],["path",{"fill":"currentColor","d":"M24 14.1a13 13 0 0 0-3-8.4l-1.7 1.4q2.2 2.3 2.4 7z"}],["path",{"fill":"currentColor","d":"M24 14.2h-2.3v0.4q0 1.2-0.4 2l1.7 1.7q1-1.5 1-3.9z"}],["path",{"fill":"currentColor","d":"M21.3 16.5q-0.30.6-0.90.8l0.8 2.50.4-0.2a4 4 0 0 0 1.4-1.2v-0.1z"}],["path",{"fill":"currentColor","d":"m20 17.4-0.8-0.1-0.8 2.5a5 5 0 0 0 2.8 0l-0.8-2.5z"}],["path",{"fill":"currentColor","d":"m18.3 16.5-1.8 2q0.90.9 2 1.3l0.7-2.5z"}],["path",{"fill":"currentColor","d":"M18.3 16.5 16 13.1l-1.4-2.4-1.6 2.5 1 1.6q1.4 2.5 2.5 3.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevMetaIcon;
