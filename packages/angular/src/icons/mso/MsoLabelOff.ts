import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-label-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoLabelOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m715-304-43-43 93-133-154-220H319l-60-60h341q26 0 41.5 10.5T671-719l169 239-125 176Zm77 248L638-210q-5 5-17 7.5t-23.48 2.5H180q-23 0-41.5-18.5T120-260v-420q0-14 3-22t7-16l-74-74 42-42L834-99l-42 43ZM383-460Zm117-60Zm88 260L180-668v408h408Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoLabelOff;
