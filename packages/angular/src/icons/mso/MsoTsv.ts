import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-tsv",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTsv {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M245-357h50v-196h58v-50H186v50h59v196Zm138 0h127q14.03 0 23.51-9.49Q543-375.97 543-390v-78q0-13-9.49-22-9.49-9-23.51-9h-77v-54h110v-50H416q-14.02 0-23.51 9.49Q383-584.02 383-570v78q0 14 9.49 23.5Q401.98-459 416-459h77v52H383v50Zm258 0h57l75-246h-50l-53 183-47-183h-50l68 246ZM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-520H140v520Zm0 0v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTsv;
