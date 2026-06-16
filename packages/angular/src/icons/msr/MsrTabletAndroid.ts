import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-tablet-android",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTabletAndroid {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M418-125h124q8 0 14-6t6-14q0-8-6-14t-14-6H418q-8 0-14 6t-6 14q0 8 6 14t14 6ZM180-40q-24.75 0-42.37-17.62T120-100v-760q0-24.75 17.63-42.37T180-920h600q24.75 0 42.38 17.63T840-860v760q0 24.75-17.62 42.38T780-40H180Zm0-210h600v-520H180v520Zm0 60v90h600v-90H180Zm0-640h600v-30H180v30Zm0-30v30-30Zm0 760v-90 90Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTabletAndroid;
