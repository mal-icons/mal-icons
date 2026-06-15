import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-layout-grid4",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfLayoutGrid4 {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 4h3v-3h-3v3zM2 2h1v1h-1v-1zM5 4h3v-3h-3v3zM6 2h1v1h-1v-1zM9 4h3v-3h-3v3zM10 2h1v1h-1v-1zM13 1v3h3v-3h-3zM15 3h-1v-1h1v1zM1 8h3v-3h-3v3zM2 6h1v1h-1v-1zM5 8h3v-3h-3v3zM6 6h1v1h-1v-1zM9 8h3v-3h-3v3zM10 6h1v1h-1v-1zM13 8h3v-3h-3v3zM14 6h1v1h-1v-1zM1 12h3v-3h-3v3zM2 10h1v1h-1v-1zM5 12h3v-3h-3v3zM6 10h1v1h-1v-1zM9 12h3v-3h-3v3zM10 10h1v1h-1v-1zM13 12h3v-3h-3v3zM14 10h1v1h-1v-1zM1 16h3v-3h-3v3zM2 14h1v1h-1v-1zM5 16h3v-3h-3v3zM6 14h1v1h-1v-1zM9 16h3v-3h-3v3zM10 14h1v1h-1v-1zM13 16h3v-3h-3v3zM14 14h1v1h-1v-1z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfLayoutGrid4;
