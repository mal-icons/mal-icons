import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-flip-to-back",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFlipToBack {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M264-596v-96h60v96h-60Zm0 184v-96h60v96h-60Zm0-368v-60h60v60h-60Zm148 516v-60h96v60h-96Zm368-516v-60h60v60h-60Zm-368 0v-60h96v60h-96ZM264-264v-60h60v60h-60Zm516-148v-96h60v96h-60Zm0-184v-96h60v96h-60Zm0 332v-60h60v60h-60ZM120-120v-572h60v512h512v60H120Zm476-660v-60h96v60h-96Zm0 516v-60h96v60h-96Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFlipToBack;
