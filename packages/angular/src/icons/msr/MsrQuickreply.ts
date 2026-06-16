import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-quickreply",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrQuickreply {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M240-240 131-131q-14 14-32.5 6.34T80-152v-668q0-24 18-42t42-18h680q24 0 42 18t18 42v250q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T820-570v-250H140v520h476q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T616-240H240Zm-100-60v-520 520Zm626 60h-30.17Q723-240 714.5-248.62T706-270v-180q0-12.75 8.63-21.37T736-480h84q11 0 18 9.5t3 20.5l-48 140h53q12 0 19 10t2 21L780-74q-2 6-8 4.5t-6-7.5v-163Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrQuickreply;
