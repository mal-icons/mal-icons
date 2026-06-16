import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-import-export",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrImportExport {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.65 3.35 5.86 6.14c-0.320.31-0.10.850.350.85H8V13c0 0.550.45 1 1 1s1-0.45 1-1V6.99h1.79c0.45 0 0.67-0.540.35-0.85L9.35 3.35a0.50.5 0 0 0-0.7 0zM16 17.01V11c0-0.55-0.45-1-1-1s-1 0.45-1 1v6.01h-1.79c-0.45 0-0.670.54-0.350.85l2.79 2.78c0.20.190.510.190.71 0l2.79-2.78c0.32-0.310.09-0.85-0.35-0.85H16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrImportExport;
