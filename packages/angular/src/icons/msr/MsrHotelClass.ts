import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-hotel-class",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrHotelClass {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M440-457ZM230-108q-9 7-17.50.5T207-125l79-259L78-533q-9-6-5.5-16.5T87-560h257l82-272q2-5 5.5-8t8.5-3q5 0 8.5 3t5.5 8l82 272h257q11 0 14.5 10.5T802-533L594-384l79 259q3 11-5.5 17.5T650-108L440-268 230-108Zm73-135 137-104 137 104-55-173 126-82H497l-57-173-57 173H232l126 82-55 173Zm493 134-45-35-64-208 154-110h56q11 0 14.5 10.5T906-435L757-328l63 203q3 11-6 17t-18-1ZM596-640l-30-102 27-90q2-5 5.5-8t8.5-3q5 0 9 3t6 8l58 192h-84Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrHotelClass;
