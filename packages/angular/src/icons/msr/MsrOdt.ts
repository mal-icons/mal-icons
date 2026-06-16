import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-odt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrOdt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M236-357h60q20 0 35-15t15-35v-146q0-20-15-35t-35-15h-60q-20 0-35 15t-15 35v146q0 20 15 35t35 15Zm0-50v-146h60v146h-60Zm179 50h95q20 0 35-15t15-35v-146q0-20-15-35t-35-15h-95q-6 0-10.5 4.5T400-588v216q0 6 4.5 10.5T415-357Zm35-50v-146h60v146h-60Zm240.12 50Q701-357 708-364.08q7-7.08 7-17.92v-171h33q10.83 0 17.92-7.12 7.08-7.12 7.08-18Q773-589 765.92-596q-7.08-7-17.92-7H631q-10.83 0-17.92 7.12-7.08 7.12-7.08 18Q606-567 613.08-560q7.08 7 17.92 7h34v171q0 10.83 7.12 17.92 7.12 7.08 18 7.08ZM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-520H140v520Zm0 0v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrOdt;
