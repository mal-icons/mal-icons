import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-add-call",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssAddCall {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M649-526v-128H521v-60h128v-128h60v128h128v60H709v128h-60Zm146 406q-122 0-242.5-59.5T336-335q-96-96-156-217t-60-243q0-10.94 1-22.97T123.81-840H336l40 189-117 118q56 93 125.5 162T542-254l117-121 181 40v212.09Q830-122 817.97-121q-12.03 1-22.97 1ZM229-588l81-82-23-110H180q0 39 12 85.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssAddCall;
