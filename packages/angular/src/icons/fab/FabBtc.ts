import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fab-btc",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FabBtc {
  readonly viewBox = "0 0 384 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M310.2 242.64c27.73-14.18 45.38-39.39 41.28-81.3-5.36-57.35-52.46-76.57-114.85-81.93V0h-48.53v77.2c-12.6 0-25.520.32-38.440.63V0h-48.53v79.41c-17.840.54-38.620.28-97.37 0v51.68c38.31-0.68 58.42-3.14 63.02 21.43v217.43c-2.92 19.49-18.52 16.68-53.25 16.07L3.77 443.68c88.48 0 97.370.32 97.370.32V512h48.53v-67.06c13.230.32 26.150.32 38.440.32V512h48.53v-68c81.3-4.41 135.65-24.89 142.9-101.47 5.67-61.45-23.32-88.86-69.33-99.89zM150.61 134.55c27.42 0 113.13-8.51 113.13 48.53 0 54.52-85.71 48.21-113.13 48.21v-96.74zm0 251.78V279.82c32.77 0 133.13-9.14 133.13 53.260 60.19-100.35 53.25-133.13 53.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FabBtc;
