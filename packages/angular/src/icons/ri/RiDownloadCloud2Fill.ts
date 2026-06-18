import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-download-cloud-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDownloadCloud2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 13V18.59L14.83 16.76L16.24 18.17L12 22.41L7.76 18.17L9.17 16.76L11 18.59V13H13ZM12 2C15.59 2 18.55 4.71 18.95 8.19C21.29 8.83 23 10.97 23 13.5C23 16.37 20.8 18.72 18 18.98L18 17C18 13.69 15.31 11 12 11C8.76 11 6.12 13.57 6 16.78L6 17L6 18.98C3.2 18.73 1 16.37 1 13.5C1 10.97 2.71 8.83 5.05 8.19C5.45 4.71 8.41 2 12 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDownloadCloud2Fill;
