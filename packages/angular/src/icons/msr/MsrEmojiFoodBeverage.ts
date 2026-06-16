import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-emoji-food-beverage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrEmojiFoodBeverage {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M190-120q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T190-180h579q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T769-120H190Zm121-120q-63 0-107-43.5T160-390v-390q0-24.75 17.63-42.37T220-840h600q24 0 42 18t18 42v160q0 24-18 42t-42 18h-96v170q0 63-43.5 106.5T573-240H311Zm413-380h96v-160h-96v160ZM311-300h261.98Q609-300 636.5-327.5T664-390v-390H397v33l71 58q1 1 9 18v150q0 9.6-7 16.8-7 7.2-18 7.2H301q-11 0-18-7.2t-7-16.8v-150q0-5 9-18l72-58v-33H220v390q0 35 28 62.5t63 27.5Zm46-480h40-40Zm85 240Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrEmojiFoodBeverage;
