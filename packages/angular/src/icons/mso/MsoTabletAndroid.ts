import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-tablet-android",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTabletAndroid {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-40q-24.75 0-42.37-17.62T120-100v-760q0-24.75 17.63-42.37T180-920h600q24.75 0 42.38 17.63T840-860v760q0 24.75-17.62 42.38T780-40H180Zm0-150v90h600v-90H180Zm218 65h164v-40H398v40ZM180-250h600v-520H180v520Zm0-580h600v-30H180v30Zm0 0v-30 30Zm0 640v90-90Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTabletAndroid;
