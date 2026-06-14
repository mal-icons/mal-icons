import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fab-internet-explorer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FabInternetExplorer {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M483.05 159.71c10.86-24.57 21.42-60.44 21.42-87.87 0-72.72-79.64-98.37-209.67-38.58-107.63-7.18-211.22 73.67-237.1 186.46 30.85-34.86 78.27-82.3 121.98-101.16C125.4 166.85 79.13 228 43.99 291.73 23.25 329.65 0 390.94 0 436.75c0 98.58 92.85 86.5 180.25 42.01 31.42 15.43 66.56 15.57 101.7 15.57 97.12 0 184.25-54.29 216.81-146.02H377.93c-52.51 88.59-196.82 53-196.82-47.44H509.9c6.41-43.58-1.65-95.71-26.85-141.16zM64.56 346.88c17.71 51.15 53.7 95.87 100.27 123.3-88.74 48.94-173.27 29.1-100.27-123.3zm115.98-108.87c2-55.15 50.28-94.87 103.98-94.87 53.42 0 101.98 39.72 103.98 94.87H180.54zm184.54-187.6c21.43-10.29 48.56-22 72.56-22 31.42 0 54.27 21.72 54.27 53.72 0 20-7.43 49.01-14.57 67.87-26.28-42.29-65.99-81.58-112.26-99.59z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FabInternetExplorer;
