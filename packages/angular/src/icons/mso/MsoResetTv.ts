import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-reset-tv",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoResetTv {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M330-120v-80H140q-24.75 0-42.37-17.62T80-260v-520q0-24.75 17.63-42.37T140-840h680q24.75 0 42.38 17.63T880-780v167h-60v-167H140v520h680v-233H487l90 89-42 42-162-161 162-162 42 42-90 90h333q23 0 41.5 18.5T880-493v233q0 24.75-17.62 42.38T820-200H630v80H330Zm180-403Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoResetTv;
