import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-download-cloud-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDownloadCloud2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 13V18.59L14.83 16.76L16.24 18.17L12 22.41L7.76 18.17L9.17 16.76L11 18.59V13H13ZM12 2C15.59 2 18.55 4.71 18.95 8.19C21.29 8.83 23 10.97 23 13.5C23 16.37 20.8 18.72 18 18.98L18 16.96C19.7 16.72 21 15.26 21 13.5C21 11.57 19.43 10 17.5 10C17.29 10 17.09 10.02 16.89 10.05C16.96 9.71 17 9.36 17 9C17 6.24 14.76 4 12 4C9.24 4 7 6.24 7 9C7 9.36 7.04 9.71 7.11 10.05C6.91 10.02 6.71 10 6.5 10C4.57 10 3 11.57 3 13.5C3 15.2 4.21 16.62 5.82 16.93L6 16.96L6 18.98C3.2 18.73 1 16.37 1 13.5C1 10.97 2.71 8.83 5.05 8.19C5.45 4.71 8.41 2 12 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDownloadCloud2Line;
