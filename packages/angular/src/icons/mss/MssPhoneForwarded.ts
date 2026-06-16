import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-phone-forwarded",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPhoneForwarded {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m729-579-40-44 78-78H526v-60h241l-77-77 43-42 149 149-153 152Zm66 459q-122 0-242.5-59.5T336-335q-96-96-156-217t-60-243q0-11 1-23t3-22h212l40 189-117 118q56 93 125.5 162T542-254l117-121 181 40v212q-10 1-22 2t-23 1ZM229-588l81-82-23-110H180q0 39 12 85.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPhoneForwarded;
