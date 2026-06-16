import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-ad-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAdOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-120q-25 0-42.5-17.5T120-180v-571l-33-33q-9-9-8.5-21.5T88-827q9-9 21.5-9t21.5 9l706 707q9 9 9 21t-9 21q-9 9-21.5 9T794-78l-43-42H180Zm0-60h511L180-692v512Zm660-22-60-60v-421H359L202-840h578q25 0 42.5 17.5T840-780v578Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAdOff;
