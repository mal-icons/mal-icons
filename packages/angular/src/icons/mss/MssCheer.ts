import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-cheer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCheer {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m318-763-34-101 38-13 34 101-38 13Zm142-47v-100h40v100h-40Zm182 47-38-13 34-101 38 13-34 101ZM876-39l8-60-242-37-46-152 36-64 38 121 57-18-101-319 22-12 174 330h98v-60h-62L672-661l-119 64 53 164-75 140 65 210 280 44ZM670-231l-64-202 64 202Zm57-18ZM84-39l-8-60 242-37 46-152-36-64-38 121-57-18 101-319-22-12-174 330H40v-60h62l186-351 119 64-53 164 75 140-65 210L84-39Zm206-192 64-202-64 202Zm-57-18Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCheer;
