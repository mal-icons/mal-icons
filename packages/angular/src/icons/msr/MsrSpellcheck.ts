import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-spellcheck",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSpellcheck {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M563-89q-5 0-9-2t-7-5L425-218q-9-9-9-21t9-21q9-9 21-9t21 9l96 96 219-219q9-9 21-9t21 9q9 9 9 21t-9 21L579-96q-3 3-7 5t-9 2ZM165-312q-19 0-27.5-12.5T136-354l172-454q5-13 18-22t27-9q14 0 27 9t18 22l171 452q7 18-1.5 31T539-312q-8 0-16-5t-11-13l-47-124H238l-47 124q-3 8-10.5 13t-15.5 5Zm92-200h189l-92-254h-5l-92 254Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSpellcheck;
