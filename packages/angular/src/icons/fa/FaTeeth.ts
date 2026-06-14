import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fa-teeth",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FaTeeth {
  readonly viewBox = "0 0 576 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 128C0 75 43 32 96 32l384 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96L96 480c-53 0-96-43-96-96L0 128zm176 48l0 56c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-56c0-26.5-21.5-48-48-48s-48 21.5-48 48zm176-48c-26.5 0-48 21.5-48 48l0 56c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-56c0-26.5-21.5-48-48-48zM48 208l0 24c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-24c0-26.5-21.5-48-48-48s-48 21.5-48 48zM96 384c26.5 0 48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24c0 26.5 21.5 48 48 48zm80-48c0 26.5 21.5 48 48 48s48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24zm176 48c26.5 0 48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24c0 26.5 21.5 48 48 48zm80-176l0 24c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-24c0-26.5-21.5-48-48-48s-48 21.5-48 48zm48 176c26.5 0 48-21.5 48-48l0-24c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 24c0 26.5 21.5 48 48 48z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FaTeeth;
