import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-moving-ministry",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrMovingMinistry {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M70-120q-12.75 0-21.37-8.62T40-150v-660q0-12.75 8.63-21.37T70-840h500q12.75 0 21.38 8.63T600-810v660q0 12.75-8.62 21.38T570-120H371v-170H270v170H70Zm30-60h110v-170h221v170h109v-600H100v600Zm110-270h60v-60h-60v60Zm0-160h60v-60h-60v60Zm160 160h60v-60h-60v60Zm0-160h60v-60h-60v60ZM210-180v-170h221v170-170H210v170Zm430-300.17q0-12.82 8.63-21.32T670-510h135l-32-33q-8-9-8.5-21t8.5-21q9-9 21-9t21 9l84 84q9 9 9 21t-9 21l-84 84q-9 9-21 9t-21-9q-9-9-8.5-21t8.5-21l32-33H670q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrMovingMinistry;
