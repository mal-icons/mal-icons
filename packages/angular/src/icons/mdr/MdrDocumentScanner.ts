import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-document-scanner",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDocumentScanner {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 6c-0.55 0-1-0.45-1-1V2c0-0.550.45-1 1-1h3c0.55 0 1 0.45 1 1s-0.45 1-1 1H4v2c0 0.55-0.45 1-1 1zm14-4c0 0.550.45 1 1 1h2v2c0 0.550.45 1 1 1s1-0.45 1-1V2c0-0.55-0.45-1-1-1h-3c-0.55 0-1 0.45-1 1zM3 18c-0.55 0-1 0.45-1 1v3c0 0.550.45 1 1 1h3c0.55 0 1-0.45 1-1s-0.45-1-1-1H4v-2c0-0.55-0.45-1-1-1zm14 4c0 0.550.45 1 1 1h3c0.55 0 1-0.45 1-1v-3c0-0.55-0.45-1-1-1s-1 0.45-1 1v2h-2c-0.55 0-1 0.45-1 1zm2-4c0 1.1-0.9 2-2 2H7c-1.1 0-2-0.9-2-2V6c0-1.10.9-2 2-2h10c1.1 0 2 0.9 2 2v12zM9 9c0 0.550.45 1 1 1h4c0.55 0 1-0.45 1-1s-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1zm0 3c0 0.550.45 1 1 1h4c0.55 0 1-0.45 1-1s-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1zm0 3c0 0.550.45 1 1 1h4c0.55 0 1-0.45 1-1s-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDocumentScanner;
