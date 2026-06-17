import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-motherboard",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsMotherboard {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.5 2a0.50.5 0 0 1 0.50.5v7a0.50.5 0 0 1-1 0v-7a0.50.5 0 0 1 0.5-0.5m2 0a0.50.5 0 0 1 0.50.5v7a0.50.5 0 0 1-1 0v-7a0.50.5 0 0 1 0.5-0.5m-10 8a0.50.5 0 0 0 0 1h6a0.50.5 0 0 0 0-1zm0 2a0.50.5 0 0 0 0 1h6a0.50.5 0 0 0 0-1zM5 3a1 1 0 0 0-1 1h-0.5a0.50.5 0 0 0 0 1H4v1h-0.5a0.50.5 0 0 0 0 1H4a1 1 0 0 0 1 1v0.5a0.50.5 0 0 0 1 0V8h1v0.5a0.50.5 0 0 0 1 0V8a1 1 0 0 0 1-1h0.5a0.50.5 0 0 0 0-1H9V5h0.5a0.50.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-0.5a0.50.5 0 0 0-1 0V3H6v-0.5a0.50.5 0 0 0-1 0zm0 1h3v3H5zm6.5 7a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h2a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5z"}],["path",{"d":"M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H0.5a0.50.5 0 0 1-0.5-0.5v-1A0.50.5 0 0 1 0.5 9H1V8H0.5a0.50.5 0 0 1-0.5-0.5v-1A0.50.5 0 0 1 0.5 6H1V5H0.5a0.50.5 0 0 1-0.5-0.5v-2A0.50.5 0 0 1 0.5 2zm1 11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsMotherboard;
