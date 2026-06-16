import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-cognition",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCognition {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M490.74-349Q557-349 603-391.08T649-493q0-52-33.58-89T534-619q-42 0-72 27.5t-30 66.61Q432-508 438.5-492q6.5 16 19.5 30l44-42q-5-3.5-7.5-8.75T492-524q0-14 11-24t31-10q23 0 39.5 18.5T590-492q0 35.19-28 59.6Q534-408 492-408q-51.2 0-86.6-40.5T370-548.58Q370-580 381.5-608t33.5-50l-43-43q-30 29-46.5 68.28-16.5 39.28-16.5 82.4Q309-466 362.01-407.5 415.02-349 490.74-349ZM240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l64 255H760v200H600v80h-60v-140h160v-200h114l-45-180q-24-97-105-158.5T480-820q-125 0-212.5 86.5T180-522.46q0 64.42 26.32 122.39Q232.65-342.09 281-297l19 18v199h-60Zm257-370Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCognition;
