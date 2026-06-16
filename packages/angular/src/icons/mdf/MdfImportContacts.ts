import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-import-contacts",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfImportContacts {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.5 4.5c-1.95 0-4.050.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 0.650.730.450.750.45C3.1 20.45 5.05 20 6.5 20c1.95 0 4.050.4 5.5 1.5 1.35-0.85 3.8-1.5 5.5-1.5 1.65 0 3.350.3 4.75 1.050.410.210.75-0.190.75-0.45V6c-1.49-1.12-3.63-1.5-5.5-1.5zm3.5 14c-1.1-0.35-2.3-0.5-3.5-0.5-1.7 0-4.150.65-5.5 1.5V8c1.35-0.85 3.8-1.5 5.5-1.5 1.2 0 2.40.15 3.50.5v11.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfImportContacts;
