import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-wall-lamp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoWallLamp {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-120v-240h60v240h-60Zm187-380h426l-84-280H391l-84 280Zm0 0h426-426Zm-87 290v-60h220q21 0 35.5-14.5T490-320v-120H266q-15 0-24-12.5t-4-26.5l102-340q3-10 10.5-15.5T368-840h304q10 0 17.5 5.5T700-819l102 340q5 14-4 26.5T774-440H550v120q0 46-32 78t-78 32H220Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoWallLamp;
