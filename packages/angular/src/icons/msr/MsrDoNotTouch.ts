import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-do-not-touch",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrDoNotTouch {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m840-206-60-60v-504q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T840-770v564ZM340-705l-60-60v-45q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T340-810v105Zm167 166-60-59v-292q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T507-890v351Zm167 59h-60v-370q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T674-850v370Zm77 357L340-534v192q0 19-16.5 27t-31.5-3l-126-92 195 288q7 11 17.5 16.5T402-100h288q16.9 0 32.95-6Q739-112 751-123ZM402-40q-27 0-51.5-12.5T311-88L68-446q-6-9-4-20t10-18q17-15 39.5-19t44.57 13.19L280-397v-197L47-827q-9-9.07-9-21.53Q38-861 47.05-870q9.05-9 21.5-9Q81-879 90-870l765 765q9 9 9 21t-9.05 21q-9.05 9-21.5 9Q821-54 812-63l-19-18q-20 19-46.56 30Q719.88-40 690-40H402Zm144-289Zm20-151Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrDoNotTouch;
