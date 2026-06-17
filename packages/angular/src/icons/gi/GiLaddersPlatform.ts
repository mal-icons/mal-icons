import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-ladders-platform",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiLaddersPlatform {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M375 16v199h18v-14h46v14h18V16h-18v39h-46V16h-18zm18 57h46v46h-46V73zm0 64h46v46h-46v-46zM25 233v46h462v-46H25zm30 64v199h18v-39h46v39h18V297h-18v14H73v-14H55zm18 32h46v46H73v-46zm0 64h46v46H73v-46z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiLaddersPlatform;
