import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-arena",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiArena {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M76 16C36 36 31 46 31 46c40 160 5 275-15 375 0 0 10 25 90 45V256c0-80-30-240-30-240zm360 0s-30 160-30 240v210c80-20 90-45 90-45-20-100-55-215-15-375 0 0-5-10-45-30zM226 196c-40 0-90 15-90 15v270s50 15 90 15h60c40 0 90-15 90-15V211s-50-15-90-15h-60z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiArena;
