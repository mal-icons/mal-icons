import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-directions",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrDirections {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M380-490h184v49q0 10.5 9.5 14.25T590-430l69-69q9-9.27 9-21.64Q668-533 659-542l-69-69q-7-7-16.5-3.25T564-600v50H350q-12.75 0-21.37 8.63T320-520v130q0 12.75 8.68 21.38 8.68 8.63 21.5 8.63 12.83 0 21.33-8.62T380-390v-100Zm99.95 413Q468-77 456.5-81 445-85 437-93L93-437q-8-8-12-19.55-4-11.55-4-23.5t4-23.45Q85-515 93-523l344-344q8-8 19.55-12 11.55-4 23.5-4t23.45 4q11.5 4 19.5 12l344 344q8 8 12 19.55 4 11.55 4 23.5t-4 23.45q-4 11.5-12 19.5L523-93q-8 8-19.55 12-11.55 4-23.5 4ZM308-308l172 172 344-344-344-344-344 344 172 172Zm172-172Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrDirections;
