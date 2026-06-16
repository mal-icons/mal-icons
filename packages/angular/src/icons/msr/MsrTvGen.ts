import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-tv-gen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTvGen {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m220-200-24 72q-2 4-4.61 6-2.61 2-6.26 2H182q-4.8 0-8.4-3.6-3.6-3.6-3.6-8.4v-68h-30q-24.75 0-42.37-17.62T80-260v-480q0-24.75 17.63-42.37T140-800h680q24.75 0 42.38 17.63T880-740v480q0 24.75-17.62 42.38T820-200h-30v69q0 4.63-3.17 7.82T779.04-120H775q-4 0-6.5-2.15T765-128l-24-72H220Zm-80-60h680v-480H140v480Zm340-240Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTvGen;
