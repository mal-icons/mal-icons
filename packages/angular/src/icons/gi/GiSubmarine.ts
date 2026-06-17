import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-submarine",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSubmarine {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M315 144v21.75L292 160l-16 80H164c-49.15 16.39-81.25 27.1-102.58 34.85L52 256l-16-16v44.92C20.05 292.31 20 296.32 20 304c0 7.710.05 11.72 16 19.16V368l16-16 9.35-18.7c21.09 7.73 52.75 18.42 101.07 34.7H372c160-16 160-128 0-128h-16v-64l-23-5.75V144h-18zM148 263h256v18H148v-18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSubmarine;
