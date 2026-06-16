import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-box",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrBox {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-674v494h600v-494H640v293q0 17.5-14 26.25t-29 0.75l-117-58-117 58q-15 8-29-0.75T320-381v-293H180Zm0 554q-24.75 0-42.37-17.62T120-180v-529q0-9.88 3-19.06 3-9.18 9-16.94l52-71q8-11 20.94-17.5Q217.88-840 232-840h495q14.12 0 27.06 6.5T775-816l53 71q6 7.77 9 16.94 3 9.18 3 19.06v529q0 24.75-17.62 42.38T780-120H180Zm17-614h565l-36.41-46H233l-36 46Zm183 60v245l100-50 100 50v-245H380Zm-200 0h600-600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrBox;
