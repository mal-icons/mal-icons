import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-document-delete",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiDocumentDelete {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.71 7.29l-4-4c-0.19-0.19-0.44-0.29-0.71-0.29h-8c-1.65 0-3 1.35-3 3v12c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3v-10c0-0.27-0.1-0.52-0.29-0.71zm-2.120.71h-1.09c-0.83 0-1.5-0.67-1.5-1.5v-1.09l2.59 2.59zm-0.59 11h-10c-0.55 0-1-0.45-1-1v-12c0-0.550.45-1 1-1h7v1.5c0 1.38 1.12 2.5 2.5 2.5h1.5v9c0 0.55-0.45 1-1 1zM15 14h-6c-0.55 0-1-0.45-1-1s0.45-1 1-1h6c0.55 0 1 0.45 1 1s-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiDocumentDelete;
